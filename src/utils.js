import { getValidEmails } from './email.js';

/**
 * 멤버 목록에서 유효한 이메일만 추출하고 중복을 제거한다.
 * @param {Array<{ email?: unknown }>} members - 이메일 필드를 가진 멤버 배열
 * @returns {string[]} 중복이 제거된 유효 이메일 목록
 */
export function getUniqueValidEmails(members) {
  return [...new Set(getValidEmails(members))];
}
