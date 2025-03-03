import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveFormData = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    company: v.string(),
    message: v.string(),
    selectedOption: v.string(),
  },
  handler: async (ctx, args) => {
    // Change table name to formSubmissions
    await ctx.db.insert("formSubmissions", args);
  },
});
