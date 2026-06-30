// WHATWG HTML Standard — valid e-mail address (RFC 5322 §3.2.3 atext + RFC 1034 labels)
// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// RFC 5321 — maximum total length of an email address
const MAX_EMAIL_LENGTH = 254;

/**
 * 이메일 주소가 WHATWG/RFC 기준 형식에 맞는지 검사한다.
 * @param {unknown} email - 검사할 값
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
  return (
    typeof email === 'string' &&
    email.length <= MAX_EMAIL_LENGTH &&
    EMAIL_REGEX.test(email)
  );
}

/**
 * 멤버 배열에서 email 필드 값만 추출한다.
 * @param {unknown} members - 멤버 배열
 * @returns {unknown[]} email 필드 값 목록 (비배열이면 빈 배열)
 */
export function extractEmails(members) {
  if (!Array.isArray(members)) {
    return [];
  }
  return members.map((member) => member.email);
}

/**
 * 멤버 배열에서 유효한 이메일 주소만 반환한다.
 * @param {Array<{ email?: unknown }>} members - 멤버 배열
 * @returns {string[]} 유효한 이메일 목록
 */
export function getValidEmails(members) {
  return extractEmails(members).filter(isValidEmail);
}
