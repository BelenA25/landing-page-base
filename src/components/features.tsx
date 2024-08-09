import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula dapibus orci, in convallis libero.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 justify-center">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Feature 4</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Feature 5</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
