import {
  SetApplicant,
  useApplicationDetails,
  useUpdateApplication,
} from '@nesto/applications/data';
import { Card } from '@nesto/shared';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { UpdateForm } from './update-form/update-form';

export function Main() {
  const { applicationId } = useParams({ strict: false });
  const applicationDetails = useApplicationDetails(applicationId);
  const queryClient = useQueryClient();

  const { mutate } = useUpdateApplication(applicationId, () => {
    toast.success('Application Updated');
    queryClient.invalidateQueries({ queryKey: ['applicationDetails'] });
  });

  const updateApplication = (command: SetApplicant) => {
    if (!applicationDetails?.product.id) throw new Error('Product not found');

    mutate({
      productId: applicationDetails.product.id,
      applicants: [command],
    });
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col flex-1">
        {applicationDetails?.product && (
          <Card>
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="px-5 py-2 -mt-6 font-bold rounded-b-xl bg-secondary text-secondary-contrast">
                Selected {applicationDetails.product.type}
              </div>
              <span className="text-xl font-semibold">
                {applicationDetails?.product.name}
              </span>
              <div className="flex flex-row justify-start font-bold text-7xl">
                {applicationDetails?.product.bestRate}
                <span className="text-4xl">%</span>
              </div>
              <span className="text-lg font-bold">
                {applicationDetails?.product.lenderName}
              </span>
            </div>
          </Card>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <Card>
          <UpdateForm
            onSaveClick={(command: SetApplicant) => updateApplication(command)}
          />
        </Card>
      </div>
    </div>
  );
}

export default Main;
