import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function AccessSection() {
  return (
    <section id="access" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">アクセス</h2>
            <p className="text-lg text-muted-foreground">お気軽にお問い合わせください</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">お問い合わせ</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">所在地</div>
                      <div className="text-muted-foreground">
                        〒100-0001
                        <br />
                        東京都千代田区千代田1-1-1
                        <br />
                        けん玉会館 3階
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">電話番号</div>
                      <div className="text-muted-foreground">03-1234-5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">メールアドレス</div>
                      <div className="text-muted-foreground">info@kendama.or.jp</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">受付時間</div>
                      <div className="text-muted-foreground">
                        平日 9:00 - 17:00
                        <br />
                        (土日祝日は休業)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">アクセス方法</h3>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground mb-2">電車でお越しの場合</div>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>JR東京駅より徒歩10分</li>
                      <li>地下鉄千代田線 二重橋前駅より徒歩5分</li>
                      <li>地下鉄丸ノ内線 大手町駅より徒歩8分</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-medium text-foreground mb-2">お車でお越しの場合</div>
                    <p>
                      首都高速都心環状線「神田橋出口」より約5分
                      <br />
                      ※専用駐車場はございません。近隣のコインパーキングをご利用ください。
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src="/tokyo-map-location.jpg"
                      alt="地図"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
