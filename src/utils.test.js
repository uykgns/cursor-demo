import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getUniqueValidEmails } from './utils.js';

test('getUniqueValidEmails returns unique valid emails only', () => {
  const members = [
    { email: 'a@example.com' },
    { email: 'b@example.com' },
    { email: 'a@example.com' },
    { email: 'invalid' },
    { email: null },
  ];
  assert.deepEqual(getUniqueValidEmails(members), [
    'a@example.com',
    'b@example.com',
  ]);
});

test('getUniqueValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(getUniqueValidEmails(null), []);
});
