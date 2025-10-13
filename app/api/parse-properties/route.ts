import { NextResponse } from "next/server";
import llmApi from "@/lib/llm";
import { alumniData } from "@/lib/alumniData";

export async function POST(req: Request) {
  const body = await req.json();
  const description = body?.post;

  const filters = await llmApi(description);

  const results = alumniData.filter((alumni) => {
    const nameOk =
      !filters.name ||
      alumni.name.toLowerCase().includes(filters.name.toLowerCase());
    const collegeOk =
      !filters.college ||
      alumni.college.toLowerCase().includes(filters.college.toLowerCase());
    const companyOk =
      !filters.company ||
      alumni.company.toLowerCase().includes(filters.company.toLowerCase());
    const locationOk =
      !filters.location ||
      alumni.location.toLowerCase().includes(filters.location.toLowerCase());
    const joinYearOk =
      !filters.join_year || alumni.join_year === filters.join_year;
    const passingYearOk =
      !filters.passing_year || alumni.passing_year === filters.passing_year;
    const roleOk =
      !filters.role ||
      alumni.role?.toLowerCase().includes(filters.role.toLowerCase());

    const skillsOk =
      !filters.skills ||
      (Array.isArray(filters.skills) &&
        filters.skills.every((s: string) =>
          alumni.skills.map((a) => a.toLowerCase()).includes(s.toLowerCase())
        ));

    return (
      nameOk &&
      collegeOk &&
      companyOk &&
      locationOk &&
      joinYearOk &&
      passingYearOk &&
      roleOk &&
      skillsOk
    );
  });

  return NextResponse.json(results);
}
