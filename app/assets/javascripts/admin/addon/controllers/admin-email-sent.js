import AdminEmailLogsController from "admin/controllers/admin-email-logs";
import { INPUT_DELAY } from "discourse-common/config/environment";
import discourseDebounce from "discourse/lib/debounce";
import { observes } from "discourse-common/utils/decorators";

export default AdminEmailLogsController.extend({
  @observes("filter.{status,user,address,type,reply_key}")
  filterEmailLogs: discourseDebounce(function () {
    this.loadLogs();
  }, INPUT_DELAY),
});
