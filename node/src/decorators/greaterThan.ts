import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments
} from "class-validator";

export function IsGreaterThan(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function(object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsGreaterThan",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = args.object[relatedPropertyName];
          console.log(typeof value);
          console.log(typeof relatedValue);
          console.log("is ", value);
          console.log("bigger than", relatedValue);
          console.log(value > relatedValue);
          return value > relatedValue;
        }
      }
    });
  };
}
