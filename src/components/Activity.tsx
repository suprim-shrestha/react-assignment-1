import { useState } from "react";
import ActivityForm from "./ActivityForm";
import ActivityDisplay from "./ActivityDisplay";
import { ActivityFormData } from "@/interfaces/activity.interface";

function Activity() {
  const [data, setData] = useState<ActivityFormData | null>(null);

  return (
    <div className="Activity">
      <ActivityForm setData={setData} />
      <ActivityDisplay formData={data} />
    </div>
  );
}

export default Activity;
