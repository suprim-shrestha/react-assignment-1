import { ActivityFormData } from "@/interfaces/activity.interface";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

interface ActivityFormProps {
  setData: React.Dispatch<React.SetStateAction<ActivityFormData | null>>;
}

function ActivityForm(props: ActivityFormProps) {
  const { register, handleSubmit, control } = useForm<ActivityFormData>({
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

  const onSubmit: SubmitHandler<ActivityFormData> = (data) => setData(data);

  function handleAddActivity() {
    append({ description: "", timeSpent: "" });
  }

  function handleRemoveActivity(index: number) {
    remove(index);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-10 flex flex-col gap-3 rounded-xl bg-gray-200 p-8 text-left text-black"
    >
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("user.name")}
          className="rounded-md px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="age">
          Age
        </label>
        <input
          className="rounded-md px-2 py-1"
          type="number"
          id="age"
          {...register("user.age")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="contactNumber">
          Contact Number
        </label>
        <input
          className="rounded-md px-2 py-1"
          type="text"
          id="contactNumber"
          {...register("user.contactNumber")}
        />
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
                {...register(`activities.${index}.description`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-lg"
                htmlFor={`activities[${index}].timeSpent`}
              >
                Time Spent:
              </label>
              <input
                className="rounded-md px-2 py-1"
                type="text"
                id={`activities[${index}].timeSpent`}
                {...register(`activities.${index}.timeSpent`)}
              />
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
