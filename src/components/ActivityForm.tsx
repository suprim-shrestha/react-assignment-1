import { ActivityFormData } from "@/interfaces/activity.interface";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

interface ActivityFormProps {
  setData: React.Dispatch<React.SetStateAction<ActivityFormData | null>>;
}

function ActivityForm(props: ActivityFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ActivityFormData>({
    mode: "onBlur",
    defaultValues: {
      activities: [{ description: "", timeSpent: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray<
    ActivityFormData,
    "activities"
  >({
    control,
    name: "activities",
  });

  const { setData } = props;

  const onSubmitForm: SubmitHandler<ActivityFormData> = (data) => setData(data);

  function handleAddActivity() {
    append({ description: "", timeSpent: "" });
  }

  function handleRemoveActivity(index: number) {
    remove(index);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="mb-10 flex flex-col gap-3 rounded-xl bg-gray-200 p-8 text-left text-black"
    >
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("user.name", {
            required: "Name is required",
          })}
          className="rounded-md px-2 py-1"
        />
        {errors.user?.name && (
          <div className="text-red-500">{errors.user.name.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="age">
          Age
        </label>
        <input
          className="rounded-md px-2 py-1"
          type="number"
          id="age"
          placeholder="Age"
          {...register("user.age", {
            required: "Age is required",
            min: { value: 0, message: "Invalid age" },
            max: { value: 100, message: "Invalid age" },
          })}
        />
        {errors.user?.age && (
          <div className="text-red-500">{errors.user.age.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="contactNumber">
          Contact Number
        </label>
        <input
          className="rounded-md px-2 py-1"
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
          {...register("user.contactNumber", {
            required: "Contact Number is required",
            pattern: {
              value: /^(?:\+\d{1,3})?\d{10}$/,
              message: "Invalid contact number format",
            },
          })}
        />
        {errors.user?.contactNumber && (
          <div className="text-red-500">
            {errors.user.contactNumber.message}
          </div>
        )}
      </div>
      {fields.map((activity, index) => {
        return (
          <div key={activity.id} className="flex gap-2">
            <div className="flex flex-col gap-2">
              <label
                className="text-lg"
                htmlFor={`activities.${index}.description`}
              >
                Description:
              </label>
              <input
                className="rounded-md px-2 py-1"
                type="text"
                id={`activities.${index}.description`}
                placeholder="Description"
                {...register(`activities.${index}.description`, {
                  required: "Description is required",
                })}
              />
              {errors.activities?.[index]?.description && (
                <div className="text-red-500">
                  {errors.activities[index]?.description?.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-lg"
                htmlFor={`activities.${index}.timeSpent`}
              >
                Time Spent:
              </label>
              <input
                className="rounded-md px-2 py-1"
                type="number"
                placeholder="Time in minutes"
                id={`activities.${index}.timeSpent`}
                {...register(`activities.${index}.timeSpent`, {
                  required: "Time Spent is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Must be a positive integer",
                  },
                })}
              />
              {errors.activities?.[index]?.timeSpent && (
                <div className="text-red-500">
                  {errors.activities[index]?.timeSpent?.message}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => handleRemoveActivity(index)}
              className="self-end rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={handleAddActivity}
        className="self-start rounded p-2 hover:font-bold"
      >
        + Add Activity
      </button>
      <button
        type="submit"
        className="self-start rounded bg-sky-500 px-4 py-2 hover:bg-sky-400"
      >
        Submit
      </button>
    </form>
  );
}

export default ActivityForm;
