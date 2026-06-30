import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, extractEmails, getValidEmails } from './email.js';

test('isValidEmail accepts valid addresses', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('a.b@c.co'), true);
  assert.equal(isValidEmail('user+newsletter@gmail.com'), true);
  assert.equal(isValidEmail("o'brien@company.ie"), true);
});

test('isValidEmail rejects invalid addresses', () => {
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail('user @example.com'), false);
  assert.equal(isValidEmail(null), false);
  assert.equal(isValidEmail(123), false);
});

test('isValidEmail rejects addresses exceeding RFC 5321 max length', () => {
  const tooLong = `${'a'.repeat(243)}@example.com`;
  assert.equal(tooLong.length, 255);
  assert.equal(isValidEmail(tooLong), false);
});

test('extractEmails returns email fields from members', () => {
  const members = [
    { email: 'a@example.com' },
    { email: 'b@example.com' },
  ];
  assert.deepEqual(extractEmails(members), ['a@example.com', 'b@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails(undefined), []);
});

test('getValidEmails returns only valid emails', () => {
  const members = [
    { email: 'valid@example.com' },
    { email: 'invalid' },
    { email: 'also@valid.org' },
    { email: null },
    { email: 'user+tag@example.com' },
    { email: '@missing-local.com' },
  ];
  assert.deepEqual(getValidEmails(members), [
    'valid@example.com',
    'also@valid.org',
    'user+tag@example.com',
  ]);
});
