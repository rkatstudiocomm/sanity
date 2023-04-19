import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '@/schemas'
//Todo Customize Mytheme
// import {myTheme} from "@/theme";
import StudioNavbar from "@/components/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
    basePath: '/studio',
    name: 'default',
    title: 'Lifestyle Blog',
    projectId: projectId || "",
    dataset: dataset || "",
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
    studio:{
        components:{
            //TODO  Add a logo component
            // logo: Logo,
            navbar: StudioNavbar
        }
    }
})
