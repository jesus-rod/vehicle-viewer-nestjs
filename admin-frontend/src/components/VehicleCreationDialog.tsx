import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

export enum CreationStatus {
  Success,
  Failure,
  None,
}

interface DialogProps {
  isOpen: boolean;
  onClose: (status: CreationStatus) => void;
}

const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toString();
const nextMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  1
).toString();
const nextYear = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
).toString();

type FormValues = {
  licensePlate: string;
  vin: string;
  model: string;
  color: string;
  validTill: string;
  active: string;
};

type Constraints = {
  IsGreaterThanSome: string;
  isLength: string;
  isNotEmpty: string;
  VehiclePlateDoesNotExist: string;
};

export const VehicleCreationDialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [backendErrors, setBackendErrors] = useState<string[]>([]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (status: CreationStatus) => {
    onClose(status);
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("--->", data);
    axios
      .post("http://localhost:8080/api/v1/vehicles", {
        licensePlate: data.licensePlate,
        vin: data.vin,
        model: data.model,
        color: data.color,
        validTill: data.validTill,
        active: data.active === "true",
      })
      .then((response) => {
        if (response.status === 201) {
          handleClose(CreationStatus.Success);
          console.log("--->", response.data);
          response.data && setBackendErrors(response.data);
        }
      })

      //TODO handle errors
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.log("lee", err.response?.data.message);
          const errors: string[] = [];
          err.response?.data.message.map(
            (elem: { constraints: Constraints }) => {
              for (const [, value] of Object.entries(elem.constraints)) {
                errors.push(value);
              }
            }
          );
          setBackendErrors(errors);
        } else {
          console.log("loo", err);
        }
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={() => {
          handleClose(CreationStatus.None);
        }}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    handleClose(CreationStatus.None);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Add dialog content here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Create new vehicle
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 font-medium">
                      All fields are required!
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="licensePlate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        License Plate
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("licensePlate", { required: true })}
                          type="text"
                          name="licensePlate"
                          id="licensePlate"
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 
                          focus:border-indigo-500 block w-full
                           sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        />
                        {errors.licensePlate && (
                          <p className="text-red-darker">
                            A license plate is required.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        VIN
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("vin", { required: true })}
                          type="text"
                          name="vin"
                          id="vin"
                          autoComplete="family-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        />
                        {errors.licensePlate && (
                          <p className="text-red-darker">
                            A "VIN" is required.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vehicle Model
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("model", { required: true })}
                          id="model"
                          name="model"
                          type="model"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        />
                      </div>
                      {errors.model && (
                        <p className="text-red-darker">
                          Vehicle model is required.
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="color"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Color
                      </label>
                      <div className="mt-1">
                        <select
                          {...register("color", { required: true })}
                          id="color"
                          name="color"
                          autoComplete="color"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        >
                          <option>blue</option>
                          <option>red</option>
                          <option>white</option>
                          <option>black</option>
                          <option>gold</option>
                          <option>silver</option>
                        </select>
                        {errors.color && (
                          <p className="text-red-darker">
                            {" "}
                            Vehicle color is required{" "}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="validTill"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Valid For
                      </label>
                      <div className="mt-1">
                        <select
                          {...register("validTill", { required: true })}
                          id="validTill"
                          name="validTill"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        >
                          <option value={tomorrow}>1 day</option>
                          <option value={nextMonth}>1 month</option>
                          <option value={nextYear}>1 year</option>
                        </select>
                        {errors.validTill && (
                          <p className="text-red-darker">
                            Vehicle validity is required.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="enabled"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Status
                      </label>
                      <div className="mt-1">
                        <select
                          {...register("active", { required: true })}
                          id="active"
                          name="active"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 my-2 bg-gray-lighter"
                        >
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>
                        {errors.active && (
                          <p className="text-red-darker">
                            Vehicle Status is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-disc mx-4 mt-6">
                  {backendErrors.length > 0 &&
                    backendErrors.flatMap((err) => {
                      return <li className="text-red-darker">{err}</li>;
                    })}
                </ul>

                <div className="mt-5 sm:mt-6">
                  <input
                    value="Submit"
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-darker text-base font-medium text-white hover:bg-red-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
