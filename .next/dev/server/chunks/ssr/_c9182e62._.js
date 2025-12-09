module.exports = [
"[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60052bfddedbe4582a47bbfcd45d178d2a8899a5c8":"$$RSC_SERVER_ACTION_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>EditPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
;
;
;
const $$RSC_SERVER_ACTION_0 = async function updatePost($$ACTION_CLOSURE_BOUND, formData) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("60052bfddedbe4582a47bbfcd45d178d2a8899a5c8", $$ACTION_CLOSURE_BOUND);
    const title = formData.get("title");
    const content = formData.get("content");
    await prisma.post.update({
        where: {
            id: $$ACTION_ARG_0
        },
        data: {
            title,
            content
        }
    });
    revalidatePath("/blog/posts");
    redirect("/blog/posts");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "60052bfddedbe4582a47bbfcd45d178d2a8899a5c8", null);
async function EditPost({ params }) {
    const session = await getServerSession(authOptions);
    if (!session) return "Not allowed";
    const postId = Number(params.id);
    if (isNaN(postId)) return "Invalid post id";
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    });
    if (!post) return "Post not found";
    if (post.authorId !== session.user.id) return "Not your post";
    var updatePost = $$RSC_SERVER_ACTION_0.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("60052bfddedbe4582a47bbfcd45d178d2a8899a5c8", postId));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PostForm, {
        mode: "edit",
        action: updatePost,
        initialTitle: post.title,
        initialContent: post.content
    }, void 0, false, {
        fileName: "[project]/app/blog/posts/[id]/edit/page.tsx",
        lineNumber: 31,
        columnNumber: 7
    }, this);
}
}),
"[project]/.next-internal/server/app/blog/posts/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$posts$2f5b$id$5d2f$edit$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/blog/posts/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60052bfddedbe4582a47bbfcd45d178d2a8899a5c8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$posts$2f5b$id$5d2f$edit$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$blog$2f$posts$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$blog$2f$posts$2f5b$id$5d2f$edit$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/blog/posts/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$posts$2f5b$id$5d2f$edit$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blog/posts/[id]/edit/page.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_c9182e62._.js.map