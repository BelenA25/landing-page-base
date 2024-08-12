import * as React from "react";
import { createClient } from '@/utils/supabase/server';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import Typography from "./Typography/typography";

export default async function PlanComparison() {
  const supabase = createClient();

  const { data: plans } = await supabase.from("Plan").select("*");
  const { data: features } = await supabase.from("plan_features").select(`
    plan_id,
    feature_id,
    is_included
  `);

  const { data: allFeatures } = await supabase.from("Feature").select(`
    id,
    titleFeature
  `);

  if (!plans || plans.length === 0) {
    return <Typography>No plans found</Typography>;
  }

  if (!features || features.length === 0) {
    return <Typography>No join features found</Typography>;
  }

  if (!allFeatures || allFeatures.length === 0) {
    return <Typography>No features found</Typography>;
  }

  const uniqueFeatures = allFeatures.map(feature => feature.titleFeature);

  return (
    <section className="p-4 mx-auto max-w-screen-lg">
      <Typography tag="h2">
        Choose the best payment for your online store
      </Typography>
      <Table>
        <TableCaption className="text-center">Payment Gateway Comparison</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {plans.map((plan) => (
              <TableHead key={plan.id}>{plan.plan_name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {uniqueFeatures.map((featureName, index) => (
            <TableRow key={index}>
              <TableCell>{featureName}</TableCell>
              {plans.map((plan) => {
                const feature = features.find(f => f.plan_id === plan.id && allFeatures.find(af => af.id === f.feature_id)?.titleFeature === featureName);
                return (
                  <TableCell key={plan.id}>
                    {feature && feature.is_included ? '✓' : '✗'}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Monthly Price</TableCell>
            {plans.map(plan => (
              <TableCell key={plan.id}>${plan.monthly_price}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Monthly Price with Annual Payment</TableCell>
            {plans.map(plan => (
              <TableCell key={plan.id}>${plan.annual_price}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Transaction Fee</TableCell>
            {plans.map(plan => (
              <TableCell key={plan.id}>{plan.transaction_fee}%</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
