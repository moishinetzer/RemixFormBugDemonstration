import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  name: string;
};
export const loader: LoaderFunction = ({ params }) => {
  const { form } = params;
  return json({ name: form });
};

export default function FormPage() {
  const data = useLoaderData() as LoaderData;
  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {/* <Form> </Form> */}
      </div>
    </div>
  );
}
