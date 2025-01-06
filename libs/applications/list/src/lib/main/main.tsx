import { useApplications } from '@nesto/applications/data';
import { Button, Card } from '@nesto/shared';
import { Link } from '@tanstack/react-router';

export function Main() {
  const { data: applications } = useApplications();

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <span className="px-6 pt-6 pb-3 -mx-6 -mt-6 text-xl font-bold rounded-t-lg bg-secondary text-secondary-contrast">
          Applications
        </span>
        {applications?.map((application, i) => (
          <div className="flex flex-col gap-2" key={application.id}>
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col">
                <span className="font-bold">{application.productId}</span>
                <span>{application.createdAt}</span>
              </div>
              <div className="flex flex-col flex-1">
                {application.applicants.map((applicant) => (
                  <div
                    className="flex flex-row gap-4"
                    key={applicant.firstName + '-' + applicant.lastName}
                  >
                    <span>
                      {applicant.firstName} {applicant.lastName}
                    </span>
                    <span>{applicant.email}</span>
                    <span>{applicant.phone}</span>
                  </div>
                ))}
              </div>

              <Link to={`/applications/${application.id}`}>
                <Button size="sm">Update</Button>
              </Link>
            </div>
            {i < applications.length - 1 && (
              <div className="flex flex-row gap-8 border-b-2"></div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Main;
