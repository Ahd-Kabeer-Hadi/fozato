import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, CreditCard } from "lucide-react";

export function AdditionalCredits() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need More Credits?</h2>
            <p className="text-xl text-muted-foreground">
              For channels with higher content volumes, purchase additional credits as needed.
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Extra Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Starting at $5 per pack</span>
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Plus className="h-4 w-4 mt-1 flex-shrink-0" />
                      Easy Add-On: Purchase extra credits directly in your dashboard anytime.
                    </li>
                    <li className="flex items-start gap-2">
                      <Plus className="h-4 w-4 mt-1 flex-shrink-0" />
                      No Hidden Fees: Credits only for extra content – the All-in-One Plan covers everything else.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}