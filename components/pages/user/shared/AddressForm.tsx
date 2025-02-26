"use client";

// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// react query
import { useMutation } from "@tanstack/react-query";
// types
import { AddressFormProps } from "@/types";
// actions
import { createAddress } from "@/actions/mutation/address.actions";
import { errorMessage } from "@/lib/functions";
// lib
import { AddressFormSchema } from "@/lib/zodValidations";
// cmp
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";

const AddressForm = ({ type, address, setOpen }: AddressFormProps) => {
  const { isLoading, mutate } = useMutation({
    mutationFn: createAddress,
  });
  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    mode: "all",
    defaultValues: {
      fullName: address ? address.fullName : "",
      phone: address ? address.phone : "",
      street: address ? address.street : "",
      city: address ? address.city : "",
      state: address ? address.state : "",
      country: address ? address.country : "",
      postalCode: address ? address.postalCode : "",
      isDefault: address ? address.isDefault : false,
    },
  });

  const onSubmit = (values: z.infer<typeof AddressFormSchema>) => {
    mutate(values, {
      onSuccess: ({ message, error }) => {
        if (error) {
          toast.error(error);
        }
        if (message) {
          toast.success(message);
          if (setOpen) setOpen(false);
        }
      },
      onError: (error) => {
        toast.error(errorMessage(error));
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="09*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal code</FormLabel>
                <FormControl>
                  <Input placeholder="Postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="isDefault"
            render={({ field }) => (
              <FormItem className="flex gap-3">
                <FormControl>
                  <Switch
                    onCheckedChange={field.onChange}
                    className="mt-1"
                    checked={field.value}
                  />
                </FormControl>
                <FormLabel>Is Default</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="submit" disabled={isLoading}>
            {type === "create" ? "Submit" : "Edit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressForm;
