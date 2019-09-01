> 참고 https://github.com/kulshekhar/ts-jest

### 세팅 과정
#### 1. 설치
```
$ npm i -D typescript jest @types/jest ts-jest
```
- typescript: TypeScript 설치 
- jest: Jest 설치
- @types/jest: Jest의 Type 정의파일 설치
- ts-jest: TypeScript로 작성된 Jest 코드를 전처리하여 Jest가 해석할 수 있게 도와줌

#### 2. jest 설정 파일 생성
```js
module.exports = {
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "testRegex": "\\.spec\\.ts$",
  "globals": {
    "ts-jest": {
      "diagnostics": true
    }
  }
}
```
- transform: 정규식으로 검색된 파일은 해당 전처리기로 처리함을 의미
  - `^.+\\.ts?$` 형식으로 정의된 파일은 `ts-jest`로 전처리한다는 것을 의미
- testRegex: 테스트 코드의 파일 규칙
- globals.ts-jest.diagnostics: 타입 오류 발생 시에 테스트 오류로 판단하는 것을 설정
