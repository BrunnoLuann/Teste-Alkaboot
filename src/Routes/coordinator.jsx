export const goToPostListPage = (history) => {
    history.push('/');
};

export const goToPostCommentsPage = (history, postId) => {
    history.push(`/posts/${postId}/comments`);
};

export const goToUserListPage = (history) => {
    history.push('/users');
};

export const goToUserDetailsPage = (history, userId) => {
    history.push(`/users/${userId}`);
};