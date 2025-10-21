export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold">全日本けん玉協会</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                日本の伝統的な技巧玩具「けん玉」の普及と発展を目指し、全国で活動を展開しています。
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">リンク</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#charm" className="hover:text-primary-foreground transition-colors">
                    けん玉の魅力
                  </a>
                </li>
                <li>
                  <a href="#history" className="hover:text-primary-foreground transition-colors">
                    歴史
                  </a>
                </li>
                <li>
                  <a href="#activities" className="hover:text-primary-foreground transition-colors">
                    活動内容
                  </a>
                </li>
                <li>
                  <a href="#president" className="hover:text-primary-foreground transition-colors">
                    会長メッセージ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>〒100-0001</li>
                <li>東京都千代田区千代田1-1-1</li>
                <li>TEL: 03-1234-5678</li>
                <li>Email: info@kendama.or.jp</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 全日本けん玉協会 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
