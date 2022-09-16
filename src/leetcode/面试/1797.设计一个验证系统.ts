/**
 * https://leetcode.cn/problems/design-authentication-manager/
 */

export class AuthenticationManager {
  private timeToLive: number; // 过期时间
  private map: Record<string, [number, number]> = {}; // 验证码

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive;
  }

  private isValid(tokenId: string, currentTime: number) {
    const token = this.map[tokenId];
    if (!token) return false;
    if (currentTime >= token[0] && currentTime < token[1]) return true;
    return false;
  }

  generate(tokenId: string, currentTime: number): void {
    this.map[tokenId] = [currentTime, currentTime + this.timeToLive];
  }

  renew(tokenId: string, currentTime: number): void {
    // 不存在&过期直接忽略
    const valid = this.isValid(tokenId, currentTime);
    if (valid === false) return;
    // 存在则延长到期时间
    const token = this.map[tokenId];
    this.map[tokenId] = [token[0], currentTime + this.timeToLive];
  }

  countUnexpiredTokens(currentTime: number): number {
    let count = 0;
    for (let tokenId in this.map) {
      const valid = this.isValid(tokenId, currentTime);
      if (valid === true) count++;
    }
    return count;
  }
}
