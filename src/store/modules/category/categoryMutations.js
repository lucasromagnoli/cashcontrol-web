import { updateObjectInsideArray, nvl } from '@/core/utils';

export default {
  BOOTSTRAP_CATEGORY(state, categories) {
    state.dataTable = nvl(categories, []);
    state.lastUpdate = new Date();
  },
  INSERT_CATEGORY(state, target) {
    state.dataTable.push(target);
  },
  UPDATE_CATEGORY(state, target) {
    state.dataTable = updateObjectInsideArray(state.dataTable, target);
  },
  DELETE_CATEGORY(state, target) {
    state.dataTable = state.dataTable.filter(
      (category) => category.id !== target.id,
    );
  },
};
