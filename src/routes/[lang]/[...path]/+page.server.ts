export async function load({ locals, params, url }) {
  console.log("params", params);
}

export const config = {
  isr: {
    expiration: 300,
  },
};
