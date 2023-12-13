import { createClient, groq } from "next-sanity";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export async function getProjects() {
    const client = createClient({

        projectId: sanityProjectId!,
        dataset: 'production',
    });

    client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdA
        }`
    )

}