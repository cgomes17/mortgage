import { SetApplicant } from '@nesto/applications/data';
import {
  Button,
  emailPattern,
  errorValidation,
  Label,
  phonePattern,
  TextInput,
} from '@nesto/shared';
import { useForm } from 'react-hook-form';

interface UpdateApplicationForm {
  fName: string;
  lName: string;
  email: string;
  phone: string;
}

export function UpdateForm({
  onSaveClick,
}: {
  onSaveClick: (command: SetApplicant) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateApplicationForm>();

  const onSubmit = (data: UpdateApplicationForm) => {
    onSaveClick({
      firstName: data.fName,
      lastName: data.lName,
      email: data.email,
      phone: data.phone,
    });
  };

  return (
    <div className="w-full">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-[90px]">
          <Label htmlFor="fName">First Name</Label>
          <TextInput
            {...register('fName', { required: 'First Name cannot be empty' })}
            id="fName"
            type="text"
            placeholder="First Name"
            {...errorValidation(errors?.fName)}
          />
        </div>
        <div className="h-[90px]">
          <Label htmlFor="lName">Last Name</Label>
          <TextInput
            {...register('lName', { required: 'Last Name cannot be empty' })}
            id="lName"
            type="text"
            placeholder="Last Name"
            {...errorValidation(errors?.lName)}
          />
        </div>
        <div className="h-[90px]">
          <Label htmlFor="email">Email Address</Label>
          <TextInput
            {...register('email', {
              required: 'Email cannot be empty',
              pattern: {
                value: emailPattern,
                message: 'Looks like this is not an email',
              },
            })}
            id="email"
            type="text"
            placeholder="Email Address"
            {...errorValidation(errors?.email)}
          />
        </div>
        <div className="h-[90px]">
          <Label htmlFor="phone">Phone</Label>
          <TextInput
            {...register('phone', {
              required: 'Phone cannot be empty',
              pattern: {
                value: phonePattern,
                message: 'Looks like this is not a valid phone number',
              },
            })}
            id="phone"
            type="text"
            placeholder="Phone"
            {...errorValidation(errors?.phone)}
          />
        </div>
        <div className="flex justify-end pt-8">
          <Button type="submit">Save Application</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
