
export const validateDates = (
    startDate: string,
    endDate: string
  ): { valid: boolean; message?: string } => {
    const hasStart = startDate.trim() !== "";
    const hasEnd = endDate.trim() !== "";
  
    if (hasStart !== hasEnd) {
      return {
        valid: false,
        message: hasStart
          ? "Please enter an end date."
          : "Please enter a start date.",
      };
    }
  
    if (!hasStart && !hasEnd) {
      return { valid: true };
    }
  
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (start > end) {
      return {
        valid: false,
        message: "Start date cannot be after end date.",
      };
    }

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const differenceInDays = (end.getTime() - start.getTime()) / MILLISECONDS_PER_DAY;
  
    if (differenceInDays > 120) {
      return {
        valid: false,
        message: "The date range cannot exceed 120 days.",
      };
    }
  
    return { valid: true };
  };
  