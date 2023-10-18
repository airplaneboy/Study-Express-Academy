import { client } from './client-config';

export default function AutoFetchChildren(props: any) {
  // const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}';
  const query = "*[_type=='courses']";
  const params = {};

  return {
    label: 'Fetch Children',
    onHandle: async () => {
      const subject = props.published;
      const courses = await client.fetch(query, params);

      const res = await client
        .patch(subject._id)
        // Ensure that the `reviews` arrays exists before attempting to add items to it
        .setIfMissing({ courses: [] })
        // Add the items after the last item in the array (append)
        .insert('after', 'courses[-1]', [{ _ref: '0bae09ac-d156-413d-868e-29fec454bf8d', _type: 'reference' }])
        .commit({
          // Adds a `_key` attribute to array items, unique within the array, to
          // ensure it can be addressed uniquely in a real-time collaboration context
          autoGenerateArrayKeys: true,
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
        });

      console.log(res);
    },
  };
}
