import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-lime-700">
            We’d Love Your Feedback
          </h1>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Help us improve by sharing your thoughts. Whether it’s a bug, a suggestion, or just something you liked — we’re listening!
          </p>
        </div>

        <FeedbackForm />
      </div>
    </div>
  );
}
