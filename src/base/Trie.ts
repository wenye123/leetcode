/**
 * 字典树/前缀树
 *   特点
 *     - 根节点不包含字符 除根节点外每个节点只包含一个字符
 *     - 树的每一个路径都是一个字符串
 *     - 每个节点的子节点包含的字符都不相同
 *   用途
 *    - 利用字符串的公共前缀来降低查找的时间，常用于搜索系统文本词频统计
 */

type TrieMap = {
  [key: string]: any;
} & { isEnd?: boolean };

export class Trie {
  private map: TrieMap;

  constructor() {
    this.map = {};
  }

  insert(word: string): void {
    let map = this.map;
    // 不断向下深入
    for (let w of word) {
      if (map[w] === undefined) {
        map[w] = {};
      }
      map = map[w];
    }
    map.isEnd = true;
  }

  search(word: string): boolean {
    let map = this.map;
    for (let w of word) {
      if (map[w] === undefined) return false;
      map = map[w];
    }
    return map.isEnd === true;
  }

  startsWith(prefix: string): boolean {
    let map = this.map;
    for (let w of prefix) {
      if (map[w] === undefined) return false;
      map = map[w];
    }
    return true;
  }
}
