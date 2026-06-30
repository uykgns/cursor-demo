# cursor-demo

멤버 목록에서 이메일을 검증·추출·중복 제거하는 Node.js 유틸리티입니다.

## 사용법

```bash
npm test
```

```js
import { isValidEmail, getValidEmails } from './src/email.js';
import { getUniqueValidEmails } from './src/utils.js';

isValidEmail('user@example.com'); // true
getUniqueValidEmails([{ email: 'a@example.com' }, { email: 'a@example.com' }]);
// ['a@example.com']
```

## 릴리스 노트

### v1.0.0

이메일 검증·추출·중복 제거 유틸리티와 단위 테스트를 포함한 첫 번째 릴리스입니다.

#### ✨ 기능

- WHATWG/RFC 기준 `isValidEmail` 이메일 유효성 검사 (최대 254자)
- 멤버 배열에서 이메일 추출 (`extractEmails`) 및 유효 이메일만 필터링 (`getValidEmails`)
- 유효 이메일 중복 제거 (`getUniqueValidEmails`)
- `node:test` 기반 단위 테스트 8건

#### 🧹 기타

- ES Modules 프로젝트 구성 (`package.json`)
- 코딩 스타일 규칙 추가 (`.cursor/rules/coding-style.mdc`)
