import { Link } from "react-router-dom"

export default function CampaignSectionItem({ tab }) {
  return (
    <span 
      className="font-medium hover:text-supporter-saturate cursor-pointer"
    >
    {tab}
    </span>
  )
}

