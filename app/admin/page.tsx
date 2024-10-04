import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function CoursesPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Button variant="secondary" size="lg">
          <Link href="/admin/courses">Courses</Link>
        </Button>
      </LayoutContent>
    </Layout>
  );
}
