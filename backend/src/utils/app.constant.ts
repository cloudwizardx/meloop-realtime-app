export const AVATAR_DEFAULT = 'https://avatar.iran.liara.run/public'
export const COVER_PHOTO_DEFAULT =
  'https://onhavanastreet.com/wp-content/uploads/2019/03/Bicycle-Village-fb-cover-photo.jpg'
export const REGEX_LINK_MESSAGE = /\bhttps:\/\/[^\s/$.?#*]+.[^\s]*/i
export const USER_PERMISSIONS = {
  SEND_MESSAGE: 'send_message',
  EDIT_MESSAGE: 'edit_message', 
  DELETE_MESSAGE: 'delete_message', 
  VIEW_CONVERSATION_LINKS: 'view_conversation_links',
  VIEW_CONVERSATION_FILES: 'view_conversation_files',
  BLOCK_USER_IN_CONVERSATION: 'block_user_in_conversation',
  SET_CONVERSATION_COLOR: 'set_conversation_color',
  SEARCH_IN_CONVERSATION: 'search_in_conversation',
  SET_QUICK_EMOTION: 'set_quick_emotion',
  SEND_QUICK_EMOTION: 'send_quick_emotion',
  SET_NICKNAME_IN_CONVERSATION: 'set_nickname_in_conversation',
  TOGGLE_CONVERSATION_NOTIFICATIONS: 'toggle_conversation_notifications',

  CREATE_POST: 'create_post',
  EDIT_POST: 'edit_post',
  DELETE_POST: 'delete_post',
  LIKE_POST: 'like_post',
  SHARE_POST: 'share_post',
  COMMENT_POST: 'comment_post',
  REPLY_COMMENT: 'reply_comment',
  LIKE_COMMENT: 'like_comment',
  TRANSLATE_POST: 'translate_post',
  TRANSLATE_COMMENT: 'translate_comment',

  CREATE_GROUP: 'create_group',
  EDIT_GROUP_POST: 'edit_group_post',
  DELETE_GROUP_POST: 'delete_group_post',
  CREATE_PAGE: 'create_page',
  CREATE_PAGE_POST: 'create_page_post',
  EDIT_PAGE_POST: 'edit_page_post',
  DELETE_PAGE_POST: 'delete_page_post',

  CREATE_SHORT_VIDEO: 'create_short_video',
  EDIT_SHORT_VIDEO: 'edit_short_video',
  DELETE_SHORT_VIDEO: 'delete_short_video',
  LIKE_SHORT_VIDEO: 'like_short_video',
  COMMENT_SHORT_VIDEO: 'comment_short_video',
  SHARE_SHORT_VIDEO: 'share_short_video',
  VIEW_SHORT_VIDEO_LIST: 'view_short_video_list',

  ADD_FRIEND: 'add_friend',
  REMOVE_FRIEND: 'remove_friend',
  FOLLOW_USER: 'follow_user',
  UNFOLLOW_USER: 'unfollow_user',
  BLOCK_USER: 'block_user',
  VIEW_FRIEND_POSTS: 'view_friend_posts',
  VIEW_GLOBAL_POSTS: 'view_global_posts',
  SUGGEST_FRIENDS: 'suggest_friends',
  BIRTHDAY_NOTIFICATIONS: 'birthday_notifications'
}
