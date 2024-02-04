import { ActivityFormData } from "@/interfaces/activity.interface";
import formatTime from "@/utils/formatTime";

interface ActivityDisplayProps {
  formData: ActivityFormData | null;
}

function ActivityDisplay(props: ActivityDisplayProps) {
  const { formData } = props;

  if (!formData) return <></>;

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-gray-200 p-8 text-left text-black">
      <h2 className="text-xl font-bold">User Data:</h2>
      <p>
        <span className="font-bold">Name: </span>
        {formData.user.name}
      </p>
      <p>
        <span className="font-bold">Age: </span>
        {formData.user.age}
      </p>
      <p>
        <span className="font-bold">Contact Number: </span>
        {formData.user.contactNumber}
      </p>
      <h3 className="text-lg font-bold">Activities:</h3>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          {formData.activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.description}</td>
              <td>{formatTime(Number(activity.timeSpent))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityDisplay;
