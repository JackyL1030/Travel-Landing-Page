import { useState } from "react";
import Checkmark from "./Icons/Checkmark";

export default function FrequentTraveler() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isChecked) {
      // We can submit the form
    }
  }

  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
        <div className="basis-150 text-center">
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>

          <p className="text-grey-800 text-base/13.5">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around the
            globe?
          </p>
        </div>

        <div className="bg-grey-500/40 block w-0.25 self-stretch" />

        <form className="flex basis-150 flex-col" onSubmit={handleSubmit}>
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">
              Full Name
            </p>

            <input
              required
              type="text"
              name="fullName"
              minLength={2}
              maxLength={50}
              placeholder="Jane Doe"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
            />
          </label>

          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>

            <input
              required
              type="email"
              name="emailAddress"
              minLength={3}
              maxLength={50}
              placeholder="janedoe@gmail.com"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="peer sr-only"
              />

              <span className="flex size-5 items-center justify-center rounded-xs bg-white p-1 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
                <Checkmark
                  className={`transition-all duration-200 ${
                    isChecked
                      ? "visible size-3 opacity-100"
                      : "invisible size-2 opacity-0"
                  }`}
                />
              </span>

              <span className="text-sm tracking-[.03rem]">
                Agree to receive promotional email updates
              </span>
            </label>

            <button
              type="submit"
              className="hover:bg-primary-800 bg-primary-700 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed"
            >
              Learn More
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
