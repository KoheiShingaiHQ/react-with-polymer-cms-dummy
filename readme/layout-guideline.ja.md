> 参考 : [React と Polymer による快適なプロトタイプ実装 ( 概念編 )](https://qiita.com/KoheiShingaiHQ/items/7a79cd0d277c94cd7c27)

`Polymer + React = Polyreact`

**Polyreact** 上にレイアウトをデザインします。

## 1. Webプロトタイプのレイアウト構成原則
> 原則 : 一覧 → 詳細

原則よりシンプルになると、Webのメリットが薄くなります。  
原則より複雑になる場合、プロトタイプの域を超えてしまいます。

> 再帰 : 一覧 → 詳細(一覧) → (詳細)

しかし、**原則の再帰** は問題ありません。