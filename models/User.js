import mongoose from 'mongoose';
import bcryptJS from 'bcryptjs';
import validator from 'validator';

const UserSchema = new mongoose.Schema(
  {
    //#region Primary
    username: {
      type: String,
      required: [true, 'Input a username'],
      unique: true,
      minlength: [3, 'Username is too short'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Input a valid email'],
      unique: true,
      maxlength: [254, 'Email is too long'],
      verified: Boolean,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      // required: [true, 'Input a valid password'],
      maxlength: 300,
      trim: true,
      validate: {
        validator: (value) => {
          const options = {
            minLength: 8,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 0,
            minSymbols: 0,
          };

          return validator.isStrongPassword(value, options);
        },
        message: 'Password does not meet the strength requirements',
      },
    },

    provider: {
      name: String,
      id: String,
      providerType: String,
    },

    profile: {
      firstName: { type: String, trim: true, lowercase: true },
      lastName: { type: String, trim: true, lowercase: true },
      image: { type: String, default: '/assets/profile-pics/KnowledgeSeeker.svg' }, //why not use buffer?
      bio: {
        type: String,
        trim: true,
        lowercase: false,
        maxlength: [500, 'Bio can only take a maximum of 500 characters'],
      },
      country: {
        id: String,
        name: String,
        flag: {
          alt: String,
          image: String,
        },
      },
      // language: String,
      phone: {
        number: String,
        nationalNumber: String,
        country: String,
        countryCallingCode: String,
        verified: Boolean,
      },
      gender: { type: String, enum: ['male', 'female', 'other', 'not specified'], default: 'not specified' },
      birthday: Date,
      age: Number,
    },
    role: {
      required: true,
      type: String,
      enum: ['student', 'teacher', 'admin'],
      default: 'student',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    notificationSettings: {
      commentNotification: { type: Boolean, default: true },
      authenticationNotification: { type: Boolean, default: true },
      offersNotification: { type: Boolean, default: true },
      pushNotification: {
        type: String,
        enum: ['everything', 'important', 'nothing'],
        default: 'everything',
      },
    },

    // status: {
    //   type: String,
    //   enum: ['active', 'inactive', 'blocked'],
    //   default: 'active',
    // },
    //#endregion

    //#region Additional
    contentProgress: {
      videos: [
        {
          id: { type: String, trim: true, unique: true },
          totalDurationWatched: { type: Number, trim: true, default: 0, required: true },
          numberOfTimesWatched: { type: Number, default: 0 },
          timeline: { type: [{ date: Date, watchTime: { type: Number } }] },
          lastUpdated: Date,
          videoDuration: Number,
          lastSecondWatched: Number,
          isCompleted: { type: Boolean, default: false },
        },
      ],
      articles: [
        {
          id: { type: String, trim: true, unique: true },
          createdAt: { type: Date },
        },
      ],
      tests: [
        {
          id: { type: String, trim: true, unique: true },
          numberOfTimesPassed: { type: Number, trim: true, default: 0, required: true },
          numberOfTimesTaken: { type: Number, default: 0 },
          numberOfQuestions: Number,
          isCompleted: { type: Boolean, default: false },
          scores: {
            type: [{ date: Date, numberOfCorrectAnswers: Number, average: Number }],
            default: [],
          },
          results: { type: [[{ questionId: String, isCorrect: Boolean, date: Date, selectedOption: String }]] },
          lastTaken: { type: Date },
          testTitle: { type: String },
          slug: { type: String },
          currentTest: {
            type: {
              selectedQuestions: mongoose.Schema.Types.Mixed,
              shuffledChoices: mongoose.Schema.Types.Mixed,
              currentTestResult: { type: mongoose.Schema.Types.Mixed },
              date: Date,
            },

            default: null,
          },
        },
      ],
      questions: [
        {
          id: { type: String, trim: true, unique: true },
          questionTitle: { type: String },
          numberOfTimesCorrect: { type: Number, trim: true, default: 0, required: true },
          numberOfTimesTaken: { type: Number, default: 0 },
          timeline: { type: [{ date: Date, isCorrect: Boolean, selectedOption: String }], default: [] },
        },
      ],
    },

    currentProgress: {
      subject: {
        id: { type: String, unique: true },
        data: mongoose.Schema.Types.Mixed,
        createdAt: { type: Date },
      },
      lesson: {
        id: { type: String, unique: true },
        data: mongoose.Schema.Types.Mixed,
        createdAt: { type: Date },
      },
      course: {
        id: { type: String, unique: true },
        data: mongoose.Schema.Types.Mixed,
        createdAt: { type: Date },
      },
      unit: {
        id: { type: String, unique: true },
        data: mongoose.Schema.Types.Mixed,
        createdAt: { type: Date },
      },
    },

    completedProgress: {
      subjects: [
        {
          id: { type: String, unique: true },
          data: mongoose.Schema.Types.Mixed,
          createdAt: { type: Date },
        },
      ],
      courses: [
        {
          id: { type: String, unique: true },
          data: mongoose.Schema.Types.Mixed,
          createdAt: { type: Date },
        },
      ],
      units: [
        {
          id: { type: String, unique: true },
          data: mongoose.Schema.Types.Mixed,
          createdAt: { type: Date },
        },
      ],
      lessons: [
        {
          id: { type: String, unique: true },
          data: mongoose.Schema.Types.Mixed,
          createdAt: { type: Date },
        },
      ],
      achievements: [
        {
          id: { type: String, unique: true },
          data: mongoose.Schema.Types.Mixed,
          createdAt: { type: Date },
        },
      ],
    },

    selectedSubjects: [
      {
        id: { type: String, unique: true },
        data: mongoose.Schema.Types.Mixed,
        createdAt: { type: Date },
      },
    ],

    //#endregion

    //#region MongoDB Schemas

    // completedLessons: { type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' },

    // currentLesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },

    // courses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },

    // completedCourses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },

    // completedUnits: { type: [mongoose.Schema.Types.ObjectId], ref: 'Unit' },

    // achievements: { type: [mongoose.Schema.Types.ObjectId], ref: 'Achievement' },

    //#endregion
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  return (this.password = await bcryptJS.hash(this.password, 12));
});

UserSchema.methods.verifyPassword = async function (password) {
  return await bcryptJS.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
