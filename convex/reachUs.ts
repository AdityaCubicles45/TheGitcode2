import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveFormData = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    experience: v.string(), // Storing years of experience as a number
    github: v.string(),
    twitter: v.string(),
    linkedin: v.string(),
    portfolio: v.string(),
    walletAddress: v.string(),
  },
  handler: async (ctx, args) => {
    // Change table name to formSubmissions
    await ctx.db.insert("users", args);
  },
});
