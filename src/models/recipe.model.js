import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    cuisine: {
      type: String,
      enum: ["indian", "italian", "chinese", "mexican", "other"],
      required: true,
    },
    category: {
      type: String,
      enum: ["veg", "non_veg", "vegan", "dessert", "snack"],
      required: true,
    },
    ingredients: [
      {
        name: {type: String, required: true},
        amount: {type: String, required: true},
        unit: {type: String, default: ""},
      },
    ],
    instructions: [
      {
        step: {type: Number, required: true},
        description: {type: String, required: true},
      },
    ],
    imageUrl: {
      type: String,
      default: "",
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    prepTime: {
      type: Number,
      required: true,
      min: [0, "Prep time cannot be negative"],
    },
    cookTime: {
      type: Number,
      required: true,
      min: [0, "Cook time cannot be negative"],
    },
    servings: {
      type: Number,
      required: true,
      min: [1, "Servings must be at least 1"],
    },
    nutrition: {
      calories: {type: Number, default: 0},
      protein: {type: Number, default: 0},
      carbs: {type: Number, default: 0},
      fat: {type: Number, default: 0},
    },
    tips: [
      {
        type: String,
        trim: true,
      },
    ],
    substitutions: [
      {
        original: {type: String, required: true},
        substitute: {type: String, required: true},
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
