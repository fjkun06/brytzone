import { CircleLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div>
          <CircleLoader cssOverride={{ color: "var(--test)" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" />

  </div>
}