"use client";

//zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//next router
import { useRouter } from "next/navigation";
  
//shadcn components
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

//markdown editor
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

//Axios
import axios from "axios";


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});


export default function NewIssuePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
      await axios.post('/api/issues', values)
      router.push('/issues');
  }

  return (
    <div className="max-w-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Issue title" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your issue.
                </FormDescription>
                <FormMessage />
              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                <SimpleMDE placeholder="Type your description here." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is the description of your issue.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
              
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}