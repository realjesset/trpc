import { inferRouterDef } from '../core';
import { ProcedureType } from '../core';
import { AnyRouter } from '../core/router';
import { TRPCError } from '../error/TRPCError';

/**
 * Base interface for any response handler
 */
export interface BaseHandlerOptions<TRouter extends AnyRouter, TRequest> {
  onError?: OnErrorFunction<TRouter, TRequest>;
  batching?: {
    enabled: boolean;
  };
  router: TRouter;
}

export type OnErrorFunction<TRouter extends AnyRouter, TRequest> = (opts: {
  error: TRPCError;
  type: ProcedureType | 'unknown';
  path: string | undefined;
  req: TRequest;
  input: unknown;
  ctx: undefined | inferRouterDef<TRouter>['_ctx'];
}) => void;
