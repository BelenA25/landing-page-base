import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

  
  export function TableSection() {
    return (
      <section className="p-4 mx-auto max-w-screen-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">
          How to choose the best payment gateway for your online store
        </h2>
        <Table>
          <TableCaption className="text-center">Payment Gateway Comparison</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Free</TableHead>
              <TableHead>Venture</TableHead>
              <TableHead>Business</TableHead>
              <TableHead>Unlimited</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Monthly Price</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>$300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Monthly Price with Annual Payment</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>$85</TableCell>
              <TableCell>$185</TableCell>
              <TableCell>$275</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transaction Fee</TableCell>
              <TableCell>5%</TableCell>
              <TableCell>4%</TableCell>
              <TableCell>3%</TableCell>
              <TableCell>2%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Sales Channels</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Online Store</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facebook Shop</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Instagram Shop</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile Point of Sale</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    );
  }
  