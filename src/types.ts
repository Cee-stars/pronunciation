/**
 * 発音辞典のデータスキーマ。
 *
 * 設計方針: このアプリは「採点」や「練習」をしない。目的は二つだけ。
 *   1. 調べたことが必ず載っている（網羅性）
 *   2. 読んだ人がその場で他人に説明できる（レクチャー可能な粒度）
 * そのため各エントリは「定義 → 調音 → 聞き分けの手がかり → L1干渉 → 対比」
 * という、人に教えるときの順序そのままの形を持つ。
 */

export type PhonemeType = 'vowel' | 'consonant';

export type Voicing = '有声' | '無声';

/** 母音の記述軸。子音では undefined になる。 */
export interface VowelFeatures {
  /** 舌の高さ: 高・中高・中・中低・低 */
  height: string;
  /** 舌の前後: 前舌・中舌・後舌 */
  backness: string;
  /** 唇の丸め */
  rounded: boolean;
  /** 緊張母音か弛緩母音か。英語の長短の本質はここ。 */
  tension: 'tense' | 'lax';
  /** 口の開き具合（顎の下がり） */
  jaw: string;
}

/** 子音の記述軸。母音では undefined になる。 */
export interface ConsonantFeatures {
  /** 調音点: 両唇・唇歯・歯・歯茎・後部歯茎・硬口蓋・軟口蓋・声門 */
  place: string;
  /** 調音方法: 破裂・摩擦・破擦・鼻音・接近・側面接近 */
  manner: string;
  /** 気流の通り道と止め方 */
  airflow: string;
}

/** 全音素に共通する調音の記述。 */
export interface Articulation {
  voicing: Voicing;
  /** 舌の位置と形。レクチャーで最初に伝える部分。 */
  tongue: string;
  /** 唇の形。 */
  lips: string;
  vowel?: VowelFeatures;
  consonant?: ConsonantFeatures;
}

/** 聞き分けのためのミニマルペア。 */
export interface MinimalPair {
  a: string;
  aIpa: string;
  b: string;
  bIpa: string;
  /** そのペアで特に注意すべき点 */
  note?: string;
}

/** 混同しやすい音との対比。聞き分けの中核データ。 */
export interface Contrast {
  /** 相手の音素の id */
  withId: string;
  withIpa: string;
  /** 調音上の違い（なぜ別の音なのか） */
  difference: string;
  /** 耳で区別するための手がかり（何を聴くか） */
  listenFor: string;
  /** 日本語話者がこの対比で失敗する理由 */
  whyHard?: string;
  pairs: MinimalPair[];
}

export type SpellingFrequency = '最頻' | '頻出' | '少数' | '例外';

/** 綴り → この音 の対応。スペリングからの逆引きに使う。 */
export interface SpellingPattern {
  /** 綴りのパターン。例: "a + 子音"、"ea"、"-tion" */
  pattern: string;
  examples: string[];
  frequency: SpellingFrequency;
  note?: string;
}

export type WordPosition = '語頭' | '語中' | '語末';

export interface Example {
  word: string;
  ipa: string;
  position: WordPosition;
  note?: string;
}

/** 日本語話者の第一言語干渉。「なぜ間違うか」を原因から説明する。 */
export interface L1Interference {
  /** 代用してしまう日本語の音 */
  substitute: string;
  /** なぜその音に置き換わるのか（音韻体系上の理由） */
  why: string;
  /** 結果としてネイティブにどう聞こえるか */
  symptom: string;
  /** 代表的な誤り例 */
  examples?: string[];
}

export interface Faq {
  q: string;
  a: string;
}

/** 音素エントリ本体。 */
export interface Phoneme {
  id: string;
  /** 音素表記（スラッシュなし。表示時に付ける） */
  ipa: string;
  type: PhonemeType;
  /** 分類: 短母音 / 二重母音 / 破裂音 など */
  group: string;
  /** Wells の lexical set キーワード。辞書間の照合に使う。 */
  keyword?: string;
  /** 日本語での通称。「エとアの中間の音」など */
  nickname: string;
  /** 一文定義。レクチャーの第一声に使える形で書く。 */
  oneLiner: string;
  articulation: Articulation;
  /** 作り方の手順。そのまま口頭で指示できる形。 */
  howTo: string[];
  /** 聞き分けの手がかり。何を聴けば判別できるか。 */
  listenFor: string[];
  l1: L1Interference;
  contrasts: Contrast[];
  spellings: SpellingPattern[];
  examples: Example[];
  /** レクチャー台本。この順で話せば説明が通る。 */
  lecture: string[];
  faq?: Faq[];
  /** 関連する音声変化ルールの id */
  relatedRules?: string[];
  /** 補足。方言差や表記の揺れなど。 */
  notes?: string[];
}
