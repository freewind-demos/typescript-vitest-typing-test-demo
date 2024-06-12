import { expectTypeOf, test } from 'vitest';
import { MyPartial } from './hello';

test('type-test', () => {
    expectTypeOf<{ a: string }>().toMatchTypeOf<MyPartial<{ a: string, b: string }>>()
    expectTypeOf<{ c: string }>().not.toMatchTypeOf<MyPartial<{ a: string, b: string }>>()
})