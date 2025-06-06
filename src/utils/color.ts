export const getSeverityColor = (severity: string) => {
    switch (severity?.toLowerCase()) {
      case "low":
        return "bg-green-100 border-green-400 text-green-800";
      case "medium":
        return "bg-yellow-100 border-yellow-400 text-yellow-800";
      case "high":
        return "bg-orange-100 border-orange-400 text-orange-800";
      case "critical":
        return "bg-red-100 border-red-400 text-red-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-700";
    }
  };