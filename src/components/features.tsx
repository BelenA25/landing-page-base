import * as React from "react";
import { createClient } from '@/utils/supabase/server';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Typography from "./Typography/typography";

export default async function Features() {
  const supabase = createClient();
  const { data: features } = await supabase.from("Feature").select();

  if (!features || features.length === 0) {
    return <Typography>No features found</Typography>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{feature.titleFeature}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {feature.textFeature}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
