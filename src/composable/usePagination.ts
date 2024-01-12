import { computed, ref, Ref, ComputedRef } from "vue";

interface UsePaginatedRange {
  pagination: ComputedRef<PaginatedRangeValuesArray>;
}

type PaginatedRangeValuesArray = Array<string | number>;

const MIN_VISIBLE_PAGES = 6;

export default function usePaginatedRange(
  totalPages: Ref<number>,
  visiblePages: Ref<number> = ref(MIN_VISIBLE_PAGES),
  currentPage: Ref<number>,
  showEllipses: Ref<boolean> = ref(true)
): UsePaginatedRange {
  const getVisiblePagesThreshold = computed<number>(() =>
    Math.floor((getTotalPages.value - 1) / 2)
  );
  const isMoreItemsThanVisible = computed<boolean>(
    () => totalPages.value >= visiblePages.value
  );
  const shouldShowEllipses = computed<boolean>(() => {
    if (!showEllipses.value) {
      return false;
    }
    return isMoreItemsThanVisible.value;
  });
  const getTotalPages = computed<number>(() => {
    if (!isMoreItemsThanVisible.value) {
      return totalPages.value;
    }
    // Anything less than 5 items being shown doesn't make sense
    // in this particular UI
    return visiblePages.value < MIN_VISIBLE_PAGES
      ? MIN_VISIBLE_PAGES
      : visiblePages.value;
  });
  const position = computed<"start" | "end" | "elsewhere">(() => {
    if (currentPage.value <= getVisiblePagesThreshold.value + 1) {
      return "start";
    } else if (
      currentPage.value >=
      totalPages.value - getVisiblePagesThreshold.value + 1
    ) {
      return "end";
    } else {
      return "elsewhere";
    }
  });
  const pagination = computed<PaginatedRangeValuesArray>(() => {
    let items: PaginatedRangeValuesArray;

    switch (position.value) {
      case "start":
        items = Array.from({ length: getTotalPages.value }, (_, index) => {
          return index + 1;
        });
        items.splice(items.length - 1, 1, totalPages.value);
        if (shouldShowEllipses.value) {
          items.splice(items.length - 2, 1, "…");
        }
        break;
      case "end":
        items = Array.from({ length: getTotalPages.value }, (_, index) => {
          return totalPages.value - index;
        });
        items.reverse().splice(0, 1, 1);
        if (shouldShowEllipses.value) {
          items.splice(1, 1, "…");
        }
        break;
      default:
        items = Array.from({ length: getTotalPages.value }, (_, index) => {
          return currentPage.value - getVisiblePagesThreshold.value + index;
        });
        items.splice(0, 1, 1);
        items.splice(items.length - 1, 1, totalPages.value);
        if (shouldShowEllipses.value) {
          items.splice(1, 1, "…");
          items.splice(items.length - 2, 1, "…");
        }
        break;
    }
    return items;
  });
  return {
    pagination,
  };
}
