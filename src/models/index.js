const User = require("./User");
const RefreshToken = require("./RefreshToken");
const Workspace = require("./Workspace");
const WorkspaceMember = require("./WorkspaceMember");
const WorkspaceInvitation = require("./WorkspaceInvitation");
const Project = require("./Project");
const ProjectMember = require("./ProjectMember");
const ProjectLabel = require("./ProjectLabel");
const TaskStatus = require("./TaskStatus");
const Task = require("./Task");
const TaskAssignee = require("./TaskAssignee");
const TaskTag = require("./TaskTag");
const TaskTagMap = require("./TaskTagMap");
const TaskDependency = require("./TaskDependency");
const Comment = require("./Comment");
const Attachment = require("./Attachment");
const ActivityLog = require("./ActivityLog");
const Notification = require("./Notification");
const AIChatSession = require("./AIChatSession");
const AIChatMessage = require("./AIChatMessage");
const AITaskGeneration = require("./AITaskGeneration");
const AIProjectSummary = require("./AIProjectSummary");
const AIToolLog = require("./AIToolLog");


// 🔹 USER RELATIONS
User.hasMany(Workspace, { foreignKey: "owner_id" });
Workspace.belongsTo(User, { foreignKey: "owner_id" });

User.hasMany(WorkspaceMember, { foreignKey: "user_id" });
WorkspaceMember.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(WorkspaceInvitation, { foreignKey: "invited_by" });

User.hasMany(Task, { foreignKey: "created_by" });
User.hasMany(Comment, { foreignKey: "user_id" });
User.hasMany(Notification, { foreignKey: "user_id" });

User.hasMany(RefreshToken, { foreignKey: "user_id" });
RefreshToken.belongsTo(User, { foreignKey: "user_id" });


// 🔹 WORKSPACE RELATIONS
Workspace.hasMany(Project, { foreignKey: "workspace_id" });
Project.belongsTo(Workspace, { foreignKey: "workspace_id" });

Workspace.hasMany(WorkspaceMember, { foreignKey: "workspace_id" });
Workspace.hasMany(WorkspaceInvitation, { foreignKey: "workspace_id" });


// 🔹 PROJECT RELATIONS
Project.hasMany(TaskStatus, { foreignKey: "project_id" });
TaskStatus.belongsTo(Project, { foreignKey: "project_id" });

Project.hasMany(Task, { foreignKey: "project_id" });
Task.belongsTo(Project, { foreignKey: "project_id" });

Project.hasMany(ProjectMember, { foreignKey: "project_id" });
Project.hasMany(ProjectLabel, { foreignKey: "project_id" });

Project.hasMany(AITaskGeneration, { foreignKey: "project_id" });
Project.hasMany(AIProjectSummary, { foreignKey: "project_id" });


// 🔹 TASK RELATIONS
Task.belongsTo(TaskStatus, { foreignKey: "status_id" });
Task.hasMany(Comment, { foreignKey: "task_id" });
Task.hasMany(Attachment, { foreignKey: "task_id" });
Task.hasMany(TaskAssignee, { foreignKey: "task_id" });
Task.hasMany(TaskTagMap, { foreignKey: "task_id" });
Task.hasMany(TaskDependency, { foreignKey: "task_id" });


// 🔹 TAG RELATIONS
TaskTag.hasMany(TaskTagMap, { foreignKey: "tag_id" });


// 🔹 AI RELATIONS
AIChatSession.hasMany(AIChatMessage, { foreignKey: "session_id" });
AIChatSession.hasMany(AIToolLog, { foreignKey: "session_id" });


// 🔹 ACTIVITY LOG
Workspace.hasMany(ActivityLog, { foreignKey: "workspace_id" });
Project.hasMany(ActivityLog, { foreignKey: "project_id" });
Task.hasMany(ActivityLog, { foreignKey: "task_id" });
User.hasMany(ActivityLog, { foreignKey: "actor_id" });


module.exports = {
  User,
  RefreshToken,
  Workspace,
  WorkspaceMember,
  WorkspaceInvitation,
  Project,
  ProjectMember,
  ProjectLabel,
  TaskStatus,
  Task,
  TaskAssignee,
  TaskTag,
  TaskTagMap,
  TaskDependency,
  Comment,
  Attachment,
  ActivityLog,
  Notification,
  AIChatSession,
  AIChatMessage,
  AITaskGeneration,
  AIProjectSummary,
  AIToolLog,
};
