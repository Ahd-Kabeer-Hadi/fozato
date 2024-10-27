"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, Loader2, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  cardNumber: z.string().min(16).max(19),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/),
  cvc: z.string().length(3),
  name: z.string().min(2),
});

interface PaymentFormProps {
  amount: number;
  planId: string;
  onSuccess: () => void;
  onBack: () => void;
  isProcessing: boolean;
  setIsProcessing: (value: boolean) => void;
}

export function PaymentForm({
  amount,
  planId,
  onSuccess,
  onBack,
  isProcessing,
  setIsProcessing,
}: PaymentFormProps) {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setError(null);
      setIsProcessing(true);

      // Simulate quick payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));

      onSuccess();
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-muted/50 p-4 rounded-lg mb-6">
          <p className="font-medium">Total Amount:</p>
          <p className="text-2xl font-bold">${amount}</p>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cardholder Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  disabled={isProcessing}
                  autoComplete="cc-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="4242 4242 4242 4242"
                  {...field}
                  disabled={isProcessing}
                  autoComplete="cc-number"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, "");
                    if (/^\d*$/.test(value) && value.length <= 16) {
                      field.onChange(value);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="MM/YY"
                    {...field}
                    disabled={isProcessing}
                    autoComplete="cc-exp"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + "/" + value.slice(2, 4);
                      }
                      if (value.length <= 5) {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="123"
                    {...field}
                    disabled={isProcessing}
                    autoComplete="cc-csc"
                    type="password"
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 3) {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {error && (
          <div className="text-sm text-destructive text-center">{error}</div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto order-2 sm:order-1"
            onClick={onBack}
            disabled={isProcessing}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button 
            type="submit" 
            className={cn(
              "w-full sm:w-auto order-1 sm:order-2",
              isProcessing && "opacity-50 cursor-not-allowed"
            )}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <LockKeyhole className="mr-2 h-4 w-4" />
                Pay Securely
              </>
            )}
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <LockKeyhole className="h-4 w-4" />
            Your payment is secure and encrypted
          </p>
          <p>You can cancel your subscription at any time</p>
        </div>
      </form>
    </Form>
  );
}